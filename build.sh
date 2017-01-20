# build code based on environmet
if [ "$NODE_ENV" == 'production' ]; then
  apt-get update
  apt-get install git -y
  git clone https://github.com/PinChun-Kuo/node-express-react.git
  cd node-express-react
  # move data to up layer
  mv * ../
  cd ..
  rm -rf node-express-react
  # install babel-cli in global to run server with babel-node due to es6
  npm install babel-cli
  npm install
fi
