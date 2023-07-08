import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, SIZES, SHADOWS } from '../constants'

export const CircleButton = ({imgUrl, handlePress, ...props}) => {
  return (
   <TouchableOpacity
    style={{
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      position: 'absolute',
      borderRadius: SIZES.extraLarge,
      alignItems: 'center',
      justifyContent: 'center',
      ...SHADOWS.light,
      ...props
    }}
    onPress={handlePress}
   >
    <Image source={imgUrl}
      resizeMode='contain'
      style={{
        width: 24,
        height: 24,
      }}
      />

   </TouchableOpacity>
  )
}


export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
   <TouchableOpacity
    style={{
      minWidth: minWidth,
      padding: SIZES.small,
      borderRadius: SIZES.extraLarge,
      backgroundColor: COLORS.primary,
      ...props
    }}

    onPress={handlePress}
   >
    <Text style={{ 
      fontSize: fontSize,
      color: COLORS.white,
      textAlign: 'center'
     }}>
      Place a bid
    </Text>
   </TouchableOpacity>
  )
}
