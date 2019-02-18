//
class God {
  constructor(name) {
    const godCount = God.count().get()

    if (godCount == 0) {
      this.number = God.count().inc(this)
      this.name = name || "God"
    } else if (godCount >= 1 && !name) {
      throw new Error("Polytheism demands Gods be named")
    } else {
      this.number = God.count().inc(this)
      this.name = name
    }
    this.state = darkSpace.bind(this)
  }

  set name(name) {
    this._name = Symbol(name)
    console.info(`AND THEY CALLED THEIR GOD ${name.toUpperCase()}`)
  }

  get name() {
    return this._name
  }
}

God.count = (() => {
  let numberOf = 0
  return () => ({
    get: () => numberOf,
    inc: god => {
      if (god instanceof God) {
        return (numberOf = numberOf + 1)
      } else {
        throw new Error("You are no God")
      }
    }
  })
})()

// returns 42 or throws 42
function answer() {
  const godCount = God.count().get()
  if (godCount === 0 || godCount === 42) {
    return 42
  } else {
    throw 42
  }
}

// tbd
function question() {}

function schrödinger() {
  return "🐈" || "💣"
}

// not Random but also not reliable
// returns somethinng maybe Also has side effects
function darkSpace() {
  darkSpace.calls = darkSpace.calls + 1

  const magicNumbers = [
    Math.PI,
    Math.SQRT2,
    Math.E,
    darkSpace.calls,
    God.count().get(),
    Math.random,
    Date.now()
  ]

  const magic = getRandomArbitrary(0, magicNumbers.length - 1)
  const size = darkSpace.calls * God.count().get()

  //  Calculate a future observation
  console.time()
  fetch(
    `https://bypasscors.herokuapp.com/api/?url=${encodeURIComponent(
      `https://via.placeholder.com/${size}`
    )}`
  )
    .then(response => {
      console.timeEnd()
      darkSpace.observed = darkSpace.observed += console.timeEnd()
    })
    .catch(e => {
      console.timeEnd()
      darkSpace.observed = darkSpace.observed + e.length * console.timeEnd()
    })

  // returns cosign of a past observation
  return Math.cos(darkSpace.observed || magicNumbers[magic])
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

module.exports = { God, answer, schrödinger, quantumState: darkSpace }
