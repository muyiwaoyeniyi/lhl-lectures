# Networking with TCP and HTTP

## Resources
- Full Video: https://vimeo.com/680730912/adcdecc730 (from another cohort)
- Video: https://vimeo.com/810925254/85245d4e4f (partial video from the lecture)
- Code:  https://github.com/muyiwaoyeniyi/lhl-lectures/tree/main/Feb-20th-2023-Cohort/flex-m02w5
- Slides (in this repo)

## Objectives
- Review of Events
- The layers of the internet
- TCP introduction
- Client/Server demo
- HTTP overview

### TCP/IP Layers in Networking

- Physical layer (cables, satelites)
- Datalink layer (ethernet, wifi)
- Network layer (IPv4, IPv6)
- Transport layer (TCP, UDP)
- Application layer (HTTP, SMTP, SSH)

further reading:
 - https://docs.oracle.com/cd/E19253-01/816-4554/ipov-10/index.html
 - https://en.wikipedia.org/wiki/Transmission_Control_Protocol

### TCP - Transport Control Protocol - In the Transport Layer

- Messages are broken down into segments, that are packaged into packets, and transported through the network independently
- Ensures reliable, performant transportation of information

## HTTP - Hyper Text Transfer Protocol - In the Application Layer

### What is HTTP ?

- How client, server communication is done online
- The client initiates a request and the server responds

### Request

The initial step of an HTTP exchange is the request.

A request is made up of:
 - A method
 - A URL (domain and path) URL
 - [optional] headers
 - [optional] body

### Methods

GET - A request to READ information
POST - A request to WRITE information
PUT/PATCH - A request to WRITE information
DELETE - A request to DELETE information
OPTION - A request to READ information about a path

### URL

Uniform Resource Locator (URL) is a text string that specifies where a resource (such as a web page, image, or video) can be found on the Internet.

i.e. https://www.lighthouselabs.ca/

### Headers

Where information about the request like cookies and user agent are defined.  Used to specify options on the request.