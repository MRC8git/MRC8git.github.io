# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 8

My Partner's Key: 2

Our initial shared key: 10

## Part 2: Messaging

| Encoded Message                    | Decoded Message                    | Key |
| ---------------------------------- | ---------------------------------- | --- |
| Rovvy ryg kbo iye                  | Hello how are you                  |  10 |
| Apcqpnewj qtyp xlolxp              | Perfectly fine madame              |  11 |
| Vojs mci twbwgvsr mcif dfcxsqhg?   | Have you finished your projects?   |  14 |
| Klt tev tlria vlr bsbo qefkh qexq? | Now why would you ever think that? |  23 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: qqNfvQ

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

Decimal: 113      113      78       102      118      81

Binary:  01110001 01110001 01001110 01100110 01110110 01010001

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Maya]
    Destination: [Eugenie]  
    Sequence: 1/3
    Data: [01110001] [01110001]
    =========
    Packet 2:

    Source: [Maya]
    Destination: [Eugenie]
    Sequence: 2/3 
    Data: [01001110] [01100110]
    =========
    Packet 3:

    Source: [Maya]
    Destination: [Eugenie]
    Sequence: 3/3
    Data: [01110110] [01010001]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation?

	The difference between symmetric and asymmetric encryption is that symmetric encryption only uses one key for both encryption and decryption, while asymmetric encryption uses two keys--one public key used to encrypt and one private key to decrypt. Both methods can be not just important, but vital, to different tasks--but it is important to use them for the right things. Being simpler, symmetric encryption is easier and faster to use, but also to hack. On the flip side, asymmetric encryption is more complex, making it more time consuming and difficult to execute--or hack. 

In this simulation, asymmetric encryption was used between partners to exchange their intitial messages over Github, allowing them to use their public keys to determine the key (shift) that would be used for their future messages. Then, symmetric encryption was simulated with ceaser cipher, the first shift having been exchanged in the first message with asymmetric encryption, over a google doc for the remainder of the messages. 

- Why is it important that this protocol uses a new key for each message?
	
	Using a new key for each message is important for this protocol because it adds an extra layer of security to the chain of messages. It wouldn't be that difficult for a hacker to discover the meaning of one of these messages through trial and error, and, if the same key were to be used for the whole conversation, figuring out that one message could give the hacker the ability to intercept and decode the entire conversation. However, by changing the key with each message, the hacker would only get that single snippet of the conversation each time and there isn't a whole lot that can be done with information from a single message without context.  

- Why is it important that you never share your secret key?

	It is extremely important to never share your secret key because doing so would leave your messages vulnerable so that jsut about anyone who felt like it could meddle (intercept, view, modify, etc) with your messages. 

- In the transport layer, do these messages use TCP or UDP? Why?

	The messages in the transport layer use TCP, Transmission Control Protocol, because it is connection based and more reliable, though slower. UDP, on the other hand is connectionless and faster, but less reliable--more suited to fast paced online usages of gaming and streaming than those of emailing and the like that would better done over TCP. 

- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer.

	In the internet layer, routers take the packets that were made and look at their destination adresses, before determining their best guess of the optimal path(s) for the packets to take in order to reach their destination. Then, in the link layer, computers work together to ensure that they all get fair access to links which send/move the data (packets) from their source computers to their destination computers. 

- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?

	Despite not being able to read the content of the message, an adversary in the middle still has access to the information contained in the header of the packet(i.e., source, destination, sequence number of packets in a message, other information). 

