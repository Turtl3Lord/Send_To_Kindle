import { pick } from '@react-native-documents/picker'
import React from 'react'
import { Button } from 'react-native'
export const DocumentPicker = ({selectFile}:any) => {
return (
  <Button
    title="single file import"
    onPress={async () => {
      try {
        const [pickResult] = await pick()
        selectFile(pickResult)
        // const [pickResult] = await pick({mode:'import'}) // equivalent
        // do something with the picked file
      } catch (err: unknown) {
        // see error handling
      }
    }}
  />
)
}

