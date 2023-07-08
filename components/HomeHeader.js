import { View, Text, Image, TextInput } from 'react-native'
import { COLORS, SIZES, assets } from '../constants'

const HomeHeader = ({onSearch}) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>

      <Image source={assets.logo}
        resizeMode='contain'
        style={{
          width: 90,
          height: 25
        }}
      />
      <View style={{ width: 45, height: 45 }}>
        <Image source={assets.person01}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: 'contain'
            }}
        />
        <Image 
          source={assets.badge}
          style={{
            width: 15,
            height: 15,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
        />
      </View>
      </View>

      <View style={{
        marginVertical: SIZES.font,
      }} >
        <Text style={{ color: COLORS.white }}>
          Hello Virgin 👋
        </Text>
        <Text style={{ color: COLORS.white, fontSize: SIZES.large, fontWeight: 'bold', marginTop: SIZES.base / 2 }}>
          Let&apos;s find a masterpiece
        </Text>
      </View>

      <View style={{
        marginTop: SIZES.font,
        backgroundColor: COLORS.gray,
        borderRadius: SIZES.font,
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.small - 2,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image source={assets.search}
          style={{
            width: 20,
            height: 20,
            marginRight: SIZES.small
          }}
        />
        <TextInput placeholder='Seatch' style={{
          flex: 1,
          color: COLORS.white
          }} 
          onChangeText={onSearch}
        />
      </View>
    </View>
  )
}

export default HomeHeader