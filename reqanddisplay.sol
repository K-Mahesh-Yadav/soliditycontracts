// SPDX-Lisence-Identifier:MIT
pragma solidity >=0.4.0;

contract demoArray{
    struct l1{
        string unit;
        string prod;
        int n;
        string date;
        string status;
    }
    l1[] public arr;
    uint i=0;
    function push_element(string memory u,string memory p,int n1,string memory x,string memory y) public {
        l1 memory s1;
        s1.unit=u;
        s1.prod=p;
        s1.n=n1;
        s1.date=x;
        s1.status=y;
        arr.push(s1);
    }
    function getMyStructs() public view returns (l1[] memory) {
        return arr;
    }
    function len() public view returns(uint){
        return arr.length;
    }
}