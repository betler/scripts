# scripts
General purpouse scripts

## wait-port-shutdown.py - Wait for port stop
Waits until port localhost:8080 is stopped (it stops accepting connections).

### TO-DO
* Accept server and port as arguments

# Linux administration
## Install OpenJDK 8 in Ubuntu
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt update
sudo apt install openjdk-8-jdk openjdk-8-jre
sudo update-alternatives --config java
sudo update-alternatives --config javac
