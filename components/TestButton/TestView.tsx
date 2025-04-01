import React, { useCallback, useState } from "react"
import { TouchableOpacity, Text, View } from "react-native"

export const TestView = () => {
  const [showText, setShowText] = useState(false)

  const handlePress = useCallback(() => {
    setShowText(!showText)
  }, [showText])

  return(
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text>Test Button</Text>
      </TouchableOpacity>
      { showText && <Text>New Text</Text> }
    </View>
  )
}