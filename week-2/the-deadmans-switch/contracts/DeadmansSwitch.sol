pragma solidity =0.5.16;

contract DeadmansSwitch {
    address owner;
    address payable nextToKin;
    uint256 lastActive;
    bool drained;

    //accept money from owner
    function() external payable {}

    //register owner
    function register(address _nextToKin) public {
        nextToKin = address(uint160(_nextToKin));
        owner = msg.sender;
    }

    function getData() public view returns (address, address, uint256 ) {
        return (owner, nextToKin, lastActive);
    }

    //note as still alive()
    function still_alive() public {
        if (owner == msg.sender) {
            lastActive = block.timestamp;
        }
    }

    // delete if time exceeded
    function drainIfDead() public {
        if (lastActive >= 2 seconds) {
            nextToKin.transfer(address(this).balance);
            drained = true;
        } else {
            drained = false;
        }
    }

    function getDrained() public view returns (bool) {
        return drained;
    }
}
