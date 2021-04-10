# Architecture

Initial area of concern is the time to search based on a given IP.

- Drives a sorted list of blocked IPs

- Access list of ip addresses:
  - one.two.three.four levels of values
  - test format in object and randomly assigned (use fs first)
    __OR__
  - hash each dotted decimal section as an index to a subset of the overall results

- ipSort (Radix sort)
  - `Slower` service responsible for...
    - Polling the lists
    - Processing a list (ensure no collisions)
    - Checking to see if the IP is 1. added or 2. removed from the list
    - Passes addition/removal list on to database manager
    - Database (DataStore?) Manager maintains the Blocked IP list
    - Each IP listed has the number of `lists` it is found on
    - If adding a new one, that number goes to 1 (track this +)
    - If adding an existing ip address, the number increments by 1
    - If removing an address, subtract 1 from the number of lists
    - If that number is zero, remove the address from the overall list (track this -)
    - Only send list (+) and (-) addresses to the ipSearch service
    - Also sends periodic status message on time period (5 minutes?) with number of lists processed, ip adds and removals, time to process lists.

- ipSearch
  - Operations
    - Accepts and IP address and returns found (true) or not found (false)
    - Log activity
  - Maintenance
    - Accepts a list of ips to (+) or (-) to the big list and updates accordingly
    - Able to create list on restart (restart also sends a status message)
  - Support
    - Log activity
    - Send periodic status message (# inquiries in past time period (minute?)), # blocked, mean time to process