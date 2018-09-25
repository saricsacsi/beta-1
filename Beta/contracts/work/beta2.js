/**
 * IMPLEMENTATION in javascript 
 * You have to declare these variables globally for the funtions
* const address = 'address of the contract that we are using in string';
* const abi = require('abi of the contract that we are using in a json file');
* const Web3 = require('web3');
* const web3 = new Web3(); <--(here you can set the provider)
*/
const Web3 = require('web3');

/**
 * Calls a contract function to get the owner of the wallet.
 *
 * @method _owner().call get the address of the owner
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {String} the address of the owner
 */

function getOwnerOfWallet(web3, address, abi, callback) {
    var res
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
          
       
    try {
        BetaWalletContract.methods._owner().call((res, error) => {
            if (!error) {
                callback(res, 0);   
            }
            else {
                callback(null, error);
                }
            });
    } catch (err) {
        callback(0, err);
    }
}
/**
 * Calls a contract function to get the admin of the wallet.
 *
 * @method admin().call get the address of the admin
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {String} the address of the admin
 */
function getAdminrOfWallet(web3, address, abi, callback) {
    var res
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
          
       
    try {
       BetaWalletContract.methods.admin().call((res, error) =>  {
            if (!error) {
                callback(res, 0);   
            }
            else {
                callback(null, error);
                }
            });
    } catch (err) {
        callback(0, err);
    }
}




/**
 * Calls a contract function to get the ID-s of the pending transactions.
 *
 * @method getPendingTransactions().call get the ID-s of the pending transactions
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {Array} the ID-s of the pending transactions
 */

function getPendingTransactions(web3, address, abi, callback) {
    var res
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
        // initiate contract for an address
    
            try {
                BetaWalletContract.methods.getPendingTransactions().call((res,error) => {
                    if (!error) {
                        callback(res, 0);   
                    }
                    else {
                        callback(null, error);
                        }
                    });
            } catch (err) {
                callback(0, err);
            }
        }

/**
 * Calls a contract function to get the balance of ethers in the wallet.
 *
 * @method walletBalance().call get the ether balance of the wallet
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {Number} the balance of ethers in the wallet
 */

function walletBalance(web3, address, abi, callback) {
    var res,balance
    const BetaWalletContract =  new web3.eth.Contract(abi, address);

            try {
                BetaWalletContract.methods.walletBalance().call((res,error) => {
                    if (!error) {
                        var balance = web3.fromWei(res, 'ether');
                        callback(balance, 0);   
                    }
                    else {
                        callback(null, error);
                        }
                    });
            } catch (err) {
                callback(0, err);
            }
        }

/**
 * Calls a contract function to get the balance of tokens in the wallet.
 *
 * @method walletBalance().call get the balance of tokens in the wallet
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {Number} the balance of tokens in the wallet
 */
function BalanceOfToken(web3, address, abi, callback) {
    var res,balance
    const BetaWalletContract =  new web3.eth.Contract(abi, address);

            try {
                BetaWalletContract.methods.walletBalanceOfToken().call((res,error) => {
                    if (!error) {
                        var balance = web3.fromWei(res, 'ether');
                        callback(balance, 0);   
                    }
                    else {
                        callback(null, error);
                        }
                    });
            } catch (err) {
                callback(0, err);
            }
        }
/**
 * Calls a contract function to get the admin of the wallet.
 *
 * @method check_permitting(who,transactionId).call check if the given address has got authorisation to sign the transaction given by the transactionId
 *      @param who the address that we are checking
 *      @param transactionId the Id of the transaction that we are checking
 * @param web3 creating a web3 connection for the function whenever it is called
 * @param address address of the contract that we are using
 * @param abi abi of the contract that we are using
 * @param {function} If the last argument is a function, the contract function
 *   call will be asynchronous, and the callback will be passed the
 *   error and result.
 * @return {boolean} true if the address can sign the transaction
 */
        
function check_permitting(web3, address, abi, who, transactionId, callback) {
    var res
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
          // initiate contract for an address
    
            try {
                 BetaWalletContract.methods.check_permitting(who, transactionId).call((res,error) => {
                     if (!error) {
                         callback(res, 0);   
                      }
                    else {
                          callback(null, error);
                          }
                     });
            } catch (err) {
                callback(0, err);
            }
          }
        
/*
call the functions what are changing the state on the network:
setNewAdmin(address _newAdmin)
withdraw_ether()
withdraw_token(uint _amount)

transferToToken(address to, uint amount, uint32 typeofTransaction)
signTransaction(uint transactionId)
deleteTransaction(uint transactionId)
 */ 


 

function transferToToken(web3, address, abi, beneficiary, amount, type,  callback) {
    var res
       
    const BetaWalletContract =  new web3.eth.Contract(abi, address, {from: web3.eth.defaultAccount});

            try {
                BetaWalletContract.methods.transferToToken(beneficiary, amount, type).send((res,error) => {
                    if (!error) {
                        callback(res, 0);   
                    }
                    else {
                        callback(null, error);
                        }
                    });
            } catch (err) {
                callback(0, err);
            }
        }


        
function signTransaction(web3, address, abi,transactionId, callback) {
    var res
                       
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
            try {
                BetaWalletContract.methods.signTransaction(transactionId).send((res,error) => {
                    if (!error) {
                         callback(res, 0);   
                    }
                    else {
                        callback(null, error);
                        }
                     });
             } catch (err) {
                callback(0, err);
            }
        }  
                

        
function deletePendingTransaction(web3, address, abi,transactionId, callback) {
    var res
                                       
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
                try {
                    BetaWalletContract.methods.deletePendingTransaction(transactionId).send((res,error) => {
                     if (!error) {
                            callback(res, 0);   
                     }
                        else {
                            callback(null, error);
                            }
                     });
            } catch (err) {
                callback(0, err);
               }
         }       
        
         
function setNewAdmin(web3, address, abi, newAdmin, callback) {
    var res
                                       
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
                try {
                    BetaWalletContract.methods.setNewAdmin(newAdmin).send((res,error) => {
                     if (!error) {
                            callback(res, 0);   
                     }
                        else {
                            callback(null, error);
                            }
                     });
            } catch (err) {
                callback(0, err);
               }
         }       
    
         
function withdraw_ether(web3, address, abi, callback) {
    var res
                                               
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
                try {
                    BetaWalletContract.methods.withdraw_ether((res,error) => {
                        if (!error) {
                             callback(res, 0);   
                        }
                         else {
                            callback(null, error);
                             }
                        });
            } catch (err) {
                callback(0, err);
                 }
            }       
      
            
   
         
function withdraw_token(web3, address, abi, token_amount, callback) {
    var res
                                                           
    const BetaWalletContract =  new web3.eth.Contract(abi, address);
                try {
                    BetaWalletContract.methods.withdraw_token(token_amount),send((res,error) => {
                        if (!error) {
                             callback(res, 0);   
                          }
                         else {
                             callback(null, error);
                              }
                        });
            } catch (err) {
                 callback(0, err);
                 }
             }       
                           
module.exports = {
    getOwnerOfWallet,
    getAdminrOfWallet,
    getPendingTransactions,
    walletBalance,
    BalanceOfToken,
    check_permitting,
    transferToToken,
    signTransaction,
    deletePendingTransaction,
    setNewAdmin,
    withdraw_ether,
    withdraw_token
  }
