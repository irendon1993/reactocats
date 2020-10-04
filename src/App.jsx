import React, { Component } from 'react'
import { PageFooter } from './components/PageFooter'
import { PageHeader } from './components/PageHeader'
import { OctoCat } from './components/OctoCat'

class App extends Component {
  render() {
    return (
      <>
        <PageHeader />
        <main>
          <OctoCat
            aHRef1="https://octodex.github.com//terracottocat/"
            catImg="https://octodex.github.com//images/Terracottocat_Single.png"
            catNumber="#149:"
            aHRef2="https://octodex.github.com//terracottocat/"
            catName="Terracottocat"
            aHRef3="https://github.com/chubbmo"
            userIcon="https://github.com/chubbmo.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//octogatos/"
            catImg="https://octodex.github.com//images/Octogatos.png"
            catNumber="#148:"
            aHRef2="https://octodex.github.com//octogatos/"
            catName="Octogatos"
            aHRef3="https://github.com/cameronfoxly"
            userIcon="https://github.com/cameronfoxly.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//sentrytocat/"
            catImg="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            catNumber="#143:"
            aHRef2="https://octodex.github.com//sentrytocat/"
            catName="Sentrytocat"
            aHRef3="https://github.com/cameronmcefee"
            userIcon="https://github.com/cameronmcefee.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//boxerocat/"
            catImg="https://octodex.github.com//images/boxertocat_octodex.jpg"
            catNumber="#141:"
            aHRef2="https://octodex.github.com//boxertocat/"
            catName="Boxertocat"
            aHRef3="https://github.com/rubyjazzy"
            userIcon="https://github.com/rubyjazzy.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//surftocat/"
            catImg="https://octodex.github.com//images/surftocat.png"
            catNumber="#140:"
            aHRef2="https://octodex.github.com//surftocat/"
            catName="Surftocat"
            aHRef3="https://github.com/jeejkang"
            userIcon="https://github.com/jeejkang.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//scubatocat/"
            catImg="https://octodex.github.com//images/scubatocat.png"
            catNumber="#138:"
            aHRef2="https://octodex.github.com//scubatocat/"
            catName="Scubtocat"
            aHRef3="https://github.com/cameronfoxly"
            userIcon="https://github.com/cameronfoxly.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//dinotocat/"
            catImg="https://octodex.github.com//images/dinotocat.png"
            catNumber="#130:"
            aHRef2="https://octodex.github.com//dinotocat/"
            catName="Dinotocat"
            aHRef3="https://github.com/kimestoesta"
            userIcon="https://github.com/kimestoesta.png"
          />
          <OctoCat
            aHRef1="https://octodex.github.com//spidertocat/"
            catImg="https://octodex.github.com//images/spidertocat.png"
            catNumber="#88:"
            aHRef2="https://octodex.github.com//spidertocat/"
            catName="Sentrytocat"
            aHRef3="https://github.com/jeejkang"
            userIcon="https://github.com/jeejkang.png"
          />
        </main>
        <PageFooter />
      </>
    )
  }
}

export default App
