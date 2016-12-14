#!/usr/bin/python

# Waits till a specified port is closed. I use this to check for Tomcat shutdowns.

import socket;
import time;


result = 0
while (result == 0):
    print "Checking port"
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex(('127.0.0.1',8080))
    print "Result " + str(result)
    if result == 0:
        print "Still listening. Wait for new test"
        time.sleep(1)
