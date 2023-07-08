import React from 'react'
import { FlatList, Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import { DetailsBid, DetailsDesc, FocusedStatusBar } from '../components'
import { CircleButton, RectButton } from '../components/Button'
import { SHADOWS, SIZES, assets } from '../constants'
import { SubInfo } from '../components/SubInfo'


const DetailsHeader = ({data, navigation}) => {
  return (
    <View style={{ width: "100%", height: 373}}>
    <Image source={data.image} 
        resizeMode='cover'
        style={{
          width: "100%",
          height: "100%",
        }}
    />
    <CircleButton 
      imgUrl={assets.left} 
      left={15}
      top={StatusBar.currentHeight + 10}
      handlePress={() => navigation.goBack()}
    />
    <CircleButton 
      imgUrl={assets.heart}
      top={StatusBar.currentHeight + 10}
      right={15}

    />
  </View>
  )
}

const Details = ({route, navigation}) => {
  const {data} = route.params
  return (
    <SafeAreaView style={{ flex: 1}}>
      <FocusedStatusBar 
         backgroundColor="transparent"
         barStyle="dark-content"
         transculent={true}
      />

      <View style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
      }} >  
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3}}
        showsVerticalScrollIndicator={false}     
        ListHeaderComponent={
          () => (
            <React.Fragment>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{
                padding: SIZES.font
              }}>
                <DetailsDesc data={data} />


                {
                  data.bids.length > 0 && (
                    <Text style={{
                      fontSize: SIZES.medium,
                      fontWeight: 'bold'
                    }}>
                      Current Bids
                    </Text>
                  )
                }
              </View>
            </React.Fragment>
          )} 
      />
    </SafeAreaView>
  )
}

export default Details