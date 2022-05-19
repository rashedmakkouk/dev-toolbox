If (-NOT ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator"))

$sudo apt install net-tools

{   
  $arguments = "& '" + $myinvocation.mycommand.definition + "'"
  Start-Process powershell -Verb runAs -ArgumentList $arguments
  Break
}

$remoteIP = bash.exe -c "ifconfig eth0 | grep 'inet '"
$hasIP = $remoteIP -match '\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}';

if ($hasIP) {
  echo $remoteIP;
  $remoteIP = $matches[0];
} else {
  echo "Could not find WSL 2 instance IP address; exiting...";
  exit;
}

# Clear existing port forwarding rules
iex "netsh interface portproxy reset";

$listenPorts = @(3000, 3001, 3002, 5500, 19000, 19001);
$connectPorts = @(3000, 3001, 3002, 5500, 19000, 19001);

# Map provided ports
for($i = 0; $i -lt $listenPorts.length; $i++) {
  $listenPort = $listenPorts[$i];
  $connectPort = $connectPorts[$i];

  if ($connectPort -eq 0) {
    $connectPort = $listenPort;
  }

  iex "netsh interface portproxy add v4tov4 listenport=$listenPort listenaddress=0.0.0.0 connectport=$connectPort connectaddress=$remoteIP";
}

# Show updated list of port forwarding rules
iex "netsh interface portproxy show v4tov4";