import { View, Text, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SHADOWS, SIZES, assets } from '../constants'
import { CircleButton, RectButton } from './Button'

import { EthPrice, NFTtitle, SubInfo } from './SubInfo'

const NFTCard = ({data}) => {
  const navigation = useNavigation();

  const handlePress = () => {

  }

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width: "100%", height: 250}}>
        <Image source={data.image}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} handlePress={handlePress} />
      </View>
        <SubInfo />

        <View style={{
          width: '100%',
          padding: SIZES.font 
        }}>
          <NFTtitle
              title={data.name}
              subTitle={data.creator}
              titleSize={SIZES.font}
              subTitleSize={SIZES.small}
          />
          <View style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center', 
          }}>
            <EthPrice price={data.price} />
            <RectButton 
                minWidth={120}
                fontSize={SIZES.font}
                handlePress={() => navigation.navigate("Details", {data})}
            />
          </View>
        </View>
    </View>
  )
}

export default NFTCard