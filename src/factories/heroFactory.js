const HeroRespository = require('./../repositories/heroRespository')
const HeroService = require('./../services/heroService')

const { join } = require('path')
const filename = join(__dirname, '../../database', 'data.json')

const generateInstance = () => {
  const heroRepository = new HeroRespository({ file: filename })
  const heroService = new HeroService({ heroRepository })

  return heroService
}

module.exports = { generateInstance }