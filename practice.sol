// SPDX-Lisence-Identifier:MIT

pragma solidity ^0.8.4;

// Define a contract for managing ownership of a resource
contract Ownable {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Not authorized");
        _;
    }
}

// Define a contract for a simple voting system
contract Voting is Ownable {
    mapping(address => bool) public hasVoted;
    mapping(string => uint256) public voteCount;

    function vote(string memory candidate) public {
        require(!hasVoted[msg.sender], "Already voted");
        hasVoted[msg.sender] = true;
        voteCount[candidate]++;
    }
}

// Define a contract that uses the voting system
contract Election is Ownable {
    Voting public voting;

    constructor() {
        voting = new Voting();
    }

    function vote(string memory candidate) public {
        voting.vote(candidate);
    }

    function getVoteCount(string memory candidate) public view returns (uint256) {
        return voting.voteCount(candidate);
    }
}
