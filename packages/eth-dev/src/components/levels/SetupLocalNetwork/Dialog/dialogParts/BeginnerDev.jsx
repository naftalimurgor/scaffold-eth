import React from 'react'
import { Link } from 'react-router-dom'

import { enrichDialog } from '../../../../gameItems/containers/dialog/helpers'
import { SpeakerLeft, SpeakerRight, Button } from '../../../../gameItems/components'

export const LEVEL_ID = 'SetupLocalNetwork'
export const DIALOG_PART_ID = `${LEVEL_ID}/BeginnerDev`

const _dialog = [
  {
    components: {
      dialog: () => (
        <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>Not to worry, not to worry!</SpeakerLeft>
      ),
      choices: null
    }
  },
  {
    components: {
      dialog: () => (
        <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>
          We've recently brokered a truce with on of the other gangs
        </SpeakerLeft>
      ),
      choices: null
    }
  },
  {
    components: {
      dialog: () => (
        <SpeakerLeft pathToAvatar='./assets/punk_anon.png'>I'll introduce you</SpeakerLeft>
      ),
      choices: ({ dialog: { currentDialog }, isLastVisibleDialog, globalGameActions }) => (
        <>
          {isLastVisibleDialog && (
            <a href='https://cryptozombies.io'>
              <Button className='is-warning' id='cryptozombies-io'>
                Check out cryptozombies.io
              </Button>
            </a>
          )}
        </>
      )
    }
  }
]

const enrichedDialog = enrichDialog(_dialog, DIALOG_PART_ID)

export default enrichedDialog