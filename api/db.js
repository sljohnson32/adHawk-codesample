const Sequelize = require('sequelize')

const sql = new Sequelize('ombud_on_tap', null, null, {
  storage: './dev.sqlite',
  dialect: 'sqlite',
  typeValidation: true,
})

const BEER_STYLES = [
  'AMBER_ALE',
  'AMBER_LAGER',
  'BOCK',
  'BROWN_ALE',
  'DARK_LAGER',
  'IPA',
  'PALE_ALE',
  'PALE_LAGER',
  'PILSNER',
  'PORTER',
  'SOUR_ALE',
  'SPECIALTY_BEER',
  'STOUT',
  'STRONG_ALE',
  'WHEAT_BEER',
  'OTHER',
]

const schemaSettings = {
  timestamps: true,
  underscored: true,
  paranoid: true,
}

const Beer = sql.define('beer', {
  name: Sequelize.STRING,
  brewer: Sequelize.STRING,
  logo_url: Sequelize.STRING,
  style: Sequelize.ENUM(...BEER_STYLES),
  on_tap: Sequelize.BOOLEAN,
  start_date: Sequelize.DATE,
  end_date: Sequelize.DATE,
}, schemaSettings)

const Tap = sql.define('tap', {
  name: Sequelize.STRING
}, schemaSettings)

Beer.belongsTo(Tap)

exports.init = () => sql.sync()
exports.Beer = Beer
exports.Tap = Tap
