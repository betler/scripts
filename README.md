# Generic scripts

## wait-port-shutdown.py - Wait for port stop
Waits until port localhost:8080 is stopped (it stops accepting connections).

### TO-DO
* Accept server and port as arguments

## First occurrence of text in file

It gives the line number. Thanks to awk '/12:06:23/{print NR;exit}' file

```sh
awk '/12:06:23/{print NR;exit}' file
```

## Extract and count IP from log file

Thanks to https://stackoverflow.com/a/55577763

```sh
grep -Eo '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' error.log | sort | uniq -c | sort -nr > occurences.txt
```

# Linux administration
## Install OpenJDK 8 in Ubuntu
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt update
sudo apt install openjdk-8-jdk openjdk-8-jre
sudo update-alternatives --config java
sudo update-alternatives --config javac

# Java JVM Management

## Get JVM memory usage and capacity

Current capacity:

```sh
jstat -gc $(ps axf | egrep -i "*/bin/java *" | egrep -v grep | awk '{print $1}') | tail -n 1 | awk '{split($0,a," "); sum=(a[1]+a[2]+a[5]+a[7])/1024; print sum" MB"}'
```
```sh $(ps axf | egrep -i "*/bin/java *" | egrep -v grep | awk '{print $1}')``` can be replaced by process PID

Different sizes/capacities can be retrieved changing columns: https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstat.html

Credits to lots of people: https://stackoverflow.com/questions/14464770/how-to-check-heap-usage-of-a-running-jvm-from-the-command-line

