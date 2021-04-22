### Things to Install to get running
- Mongodb (mongodb)
- Run `npm i`
- To develop for frontend `cd` into the frontend directory and then run npm dev

#### Notes
- If installing mongo community edition through brew: `brew tap mongodb/brew` & `brew install mongodb-community@4.4`
  - Start mongo: `brew services start mongodb-community@4.4`
  - Stop mongo: `brew services stop mongodb-community@4.4`
  - Start in background: `mongod --config /usr/local/etc/mongod.conf --fork`
  - Verify running: `brew services list`
  - Verify running background: `ps aux | grep -v grep | grep mongod`
