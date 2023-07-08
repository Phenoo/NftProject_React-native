import { View, Text, Image } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES, assets } from '../constants'


export const NFTtitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
      <View>
        <Text style={{fontSize: titleSize, color: COLORS.primary, fontWeight: "bold"}}>
          {title}</Text>
          <Text style={{ fontSize: subTitleSize, color: COLORS.primary }}>
            {subTitle}
          </Text>
      </View>
    )
  }

  export const EthPrice = ({price}) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={assets.eth} 
            resizeMode='contain'
            style={{
              width: 20,
              height: 20,
              marginRight: 2
            }}
          />
        <Text 
            style={{
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
          {price}</Text>
      </View>
    )
  }

  export const ImgCmp = ({imgUrl, index}) => {
    return (
      <Image 
        source={imgUrl}
        resizeMode='contain'
        style={{
            height: 48,
            width: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
      />
    )
  }

  export const People = () => {
    return (
      <View   style={{
        flexDirection: 'row'
      }}>
        {
            [ assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImgCmp imgUrl={imgUrl} index={index}
                        key={`People-${index}`}
                />
            ))
        }
      </View>
    )
  }
  export const EndDate = () => {
    return (
      <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.font,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%"
      }}>
       <Text
        style={{ fontSize: SIZES.small, color: COLORS.primary}}
       >
        Ending in
       </Text>
       <Text
        style={{ fontSize: SIZES.large, color: COLORS.primary, fontWeight: "bold" }}>
            12h 30m
       </Text>
      </View>
    )
  }

export const SubInfo = () => {
  return (
    <View style={{
        width: '100%',
        marginTop: - SIZES.extraLarge,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: SIZES.font
    }}>
        <People />
        <EndDate />
    </View>
  )
}

