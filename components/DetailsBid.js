import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants'
import { Image } from 'react-native'
import { EthPrice } from './SubInfo'

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: SIZES.base,
      paddingVertical: SIZES.base,
    }}>
      <Image
        source={bid.image}
        resizeMode='contain'
        style={{
          width: 50,
          height: 50
        }}
      />
      <View>
        <Text style={{
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
          Bid placed by {bid.name}
        </Text>
        <Text style={{
          fontSize: SIZES.small - 2,
          marginTop: 3
        }}>
          {bid.date}
        </Text>
      </View>
      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid