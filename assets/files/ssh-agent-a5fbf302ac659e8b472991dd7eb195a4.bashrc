# This script automates initializing SSH Agent and loading SSH keys when running a new 'bash'
# instance.
#
# To avoid service startup error (1058), set 'OpenSSH Authentication Agent' service to either
# 'Automatic' or 'Manual'.
#
# See 'Working with SSH key passphrases' for more details.
# https://docs.github.com/en/authentication/connecting-to-github-with-ssh/working-with-ssh-key-passphrases
#
env=~/.ssh/agent.env

agent_load_env () {
	test -f "$env" && . "$env" >| /dev/null;
}

agent_start () {
	(umask 077; ssh-agent >| "$env")
	. "$env" >| /dev/null;
}

agent_load_env

# Query ssh-agent service
echo ">> Checking SSH Agent status..."
echo "$(sc query ssh-agent)"

# New line
echo

# Check SSH_AUTH_SOCK
echo ">> Checking SSH Authentication Socket status..."

if [ ! "$SSH_AUTH_SOCK" ]; then
	echo "Socket not available."
else
	echo "$SSH_AUTH_SOCK"
fi

# New line
echo

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)
echo ">> SSH Agent Run State: $agent_run_state"

if [ $agent_run_state = 2 ]; then
	echo "Agent not running, initializing services..."
    agent_start
	ssh-add
elif [ $agent_run_state = 1 ]; then
	echo "Agent running, updating services..."
	ssh-add
else
	echo "Agent running."
fi

# New line
echo

# Check agent new run state
agent_run_state_updated=$(ssh-add -l >| /dev/null 2>&1; echo $?)
echo ">> SSH Agent Run State - Updated: $agent_run_state_updated"

if [ $agent_run_state_updated = 2 ]; then
	echo "Failed to initialize service."
else
	echo "- Adding identities..."
	
	# Load all generated SSH private key files stored under `~/.ssh`
	for ssh_key in ~/.ssh/id_*; do
		if grep -q PRIVATE "$ssh_key"; then
			ssh-add "$ssh_key"
		fi
	done
	
	# New line
	echo
	
	echo "- Listing registered identities..."
	ssh-add -l -E sha256
fi

unset env

# New line
echo

echo ">> Finished."