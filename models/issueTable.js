import Sequelize from 'sequelize';
import sequelize from './DB.config';

const issueTable = sequelize.define('issue', {
  seq: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  owner: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  priority: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
  freezeTableName: true,
  paranoid: true
});

// if (!process.env.test) {
//   issueTable.sync({
//     force: false
//   }).then(function() {
//     // table created
//     issueTable.bulkCreate([
//       { status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
//       { status: 'Open', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
//       { status: 'Close', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' },
//       { status: 'Pending', category: 'category4', title: 'title4', owner: 'Owner4', priority: 'P4' },
//       { status: 'Processing', category: 'category5', title: 'title5', owner: 'Owner5', priority: 'P5' }
//     ]);
//   });
// }

module.exports = issueTable;
