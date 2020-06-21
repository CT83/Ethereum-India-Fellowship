pragma solidity =0.5.16;

contract DeadmansSwitch {
    struct UserData {
        address payable nextToKin;
        uint256 lastActive;
    }

    mapping(address => UserData) userData;

    function alive(address _nextToKin) public payable {
        userData[msg.sender].nextToKin =  address(uint160(_nextToKin));
        userData[msg.sender].lastActive = block.timestamp;
        address payable senderAddr = address(uint160(msg.sender));
        senderAddr.approve(address(this), msg.sender.balance);
    }

    function getUserData() public view returns (address, uint256) {
        return (
            userData[msg.sender].nextToKin,
            userData[msg.sender].lastActive
        );
    }
}
