env=~/.ssh/agent.env

agent_load_env () {
	test -f "$env" && . "$env" >| /dev/null;
}

agent_start () {
	(umask 077; ssh-agent >| "$env")
	. "$env" >| /dev/null;
}

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2=agent not running
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
	echo "Initializing new SSH agent..."
	agent_start
fi

# Get latest agent state
agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
	echo "SSH agent not running..."
else
	echo "SSH agent running..."

	echo "Adding identities..."
	
	# Load all generated SSH private key files stored under `~/.ssh`
	for ssh_key in ~/.ssh/id_*; do
		if grep -q PRIVATE "$ssh_key"; then
			echo "--> Adding private key $ssh_key..."
			ssh-add "$ssh_key"
		fi
	done
	
	echo "Listing registered identities..."

	ssh-add -l -E sha256
fi

unset env