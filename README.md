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
- Actually starting mongodb (for testing!!!)
  - `./start-mongo.sh` for mac and linux
- To add a new administrator account through cli
  - `ts-node create-admin.ts`
- To run typescript server (for all server side things testing)
  - `npm run test`
  - runs on port 5000
- To run frontend development server (for all client side features)
  - `cd src`
  - `npm run dev`
  - runs on port 3000 (or whatever it says in the terminal)


really nice getting started with mongodb[https://medium.com/swlh/get-up-and-running-with-mongodb-in-under-5-minutes-abc8770b1ef8]
