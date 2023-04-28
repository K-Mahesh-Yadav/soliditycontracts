// SPDX-Lisence-Identifier:MIT
pragma solidity >=0.4.0;

contract demoArray{
    struct l1{
        uint id;
        string prod;
        int n;
        string subdate;
        string date;
        string status;
    }
    l1[] public arr;

    struct l2{
        uint id;
        string name;
        string prod;
        int n;
        string subdate;
        string date;
        string cdate;
        int budget;
        string status;
    }
    l2[] public carr;
    
    function push_element(string memory n2,int n3,string memory date,string memory x,uint id) public {
        l1 memory s1;
        s1.id=id;
        s1.prod=n2;
        s1.n=n3;
        s1.subdate=date;
        s1.date=x;
        s1.status="Pending";
        arr.push(s1);
    }
    function getMyStructs() public view returns (l1[] memory) {
        return arr;
    }

    function setconformed(l2 memory x) public {
        l2 memory s2;
        s2.id=x.id;
        s2.name=x.name;
        s2.prod=x.prod;
        s2.n=x.n;
        s2.subdate=x.subdate;
        s2.date=x.date;
        s2.cdate=x.cdate;
        s2.budget=x.budget; 
        s2.status=x.status;
        carr.push(s2);
    }
    function update(uint i,uint id,uint k) public{
        for(uint j=0;j<carr.length;j++){
            if(j==i){
                carr[i].status="Accepted";
            }
            else if(carr[j].id==id){
                carr[j].status="Rejected";
            }
        }
        arr[k].status="Approved";
    }
    function getconformed() public view returns (l2[] memory) {
        return carr;
    }
}