import os
import copy
from brownie import ZERO_ADDRESS, accounts, config, Contract, RenToken, RenPool
import constants as C

def main():
  """
  Set your .env file accordingly before deploying the RenPool contract.
  In case of the live networks, make sure your account is funded.
  """
  network = config['networks']['default']

  if (network != 'development' and network != 'kovan'):
    raise ValueError('Unsupported network, switch to development or kovan')

  owner = None
  admin = None
  renTokenAddr = ZERO_ADDRESS
  renToken = None
  bond = C.POOL_BOND

  if (network == 'development'):
    owner = accounts[0]
    admin = accounts[1]
    renToken = RenToken.deploy({'from': owner})
    renTokenAddr = renToken.address

  if (network == 'kovan'):
    account = accounts.add(config['wallets']['from_key'])
    owner = copy.copy(account)
    admin = copy.copy(account)
    renTokenAddr = os.environ['REN_TOKEN_ADDRESS']
    renToken = Contract(renTokenAddr)
    bond = C.TEST_POOL_BOND

  if (network == 'mainnet'):
    account = accounts.add(config['wallets']['from_key'])
    owner = copy.copy(account)
    admin = copy.copy(account)
    renTokenAddr = os.environ['REN_TOKEN_ADDRESS']
    renToken = Contract(renTokenAddr)

  renPool = RenPool.deploy(
    renTokenAddr,
    ZERO_ADDRESS,
    owner,
    bond,
    {'from': admin}
  )

  return renToken, renPool
