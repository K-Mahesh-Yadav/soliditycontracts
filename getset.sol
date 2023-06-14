// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Getsol {
    string[] verified=["vinod","naveen","--singh","--khan"];
    
    function Getverified(string memory userc) public view returns (string memory) {
        int flag=0;
        for(uint i=0 ; i< verified.length;i++){
            if(keccak256(bytes(userc)) == keccak256(bytes(verified[i]))){
                flag=1;
                return 'user found';
            }
        }
        if(flag==0){
            return 'Not found';
        }
    }  
    function set(string memory usera) public returns (string memory){
        verified.push(usera);
        return 'user added';
    }
}