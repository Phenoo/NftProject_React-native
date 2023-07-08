import { View, Text } from 'react-native'
import { EthPrice, NFTtitle } from './SubInfo'
import { COLORS, SIZES } from '../constants'
import { useState } from 'react'

const DetailsDesc = ({data}) => {
  const [ readMore, setReadMore ] = useState(false)
  const [ text, setText] = useState(data.description.slice(0, 100))
  return (
    <>
      <View style={{
        width: '100%',
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTtitle 
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.medium}
          subTitleSize={SIZES.small}
        />
        <EthPrice 
          price={data.price}
        />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{ fontSize: SIZES.large, fontWeight: "bold"}}>
          Description
        </Text>
        <Text style={{
          marginTop: SIZES.font,
          color: COLORS.gray,
          fontSize: SIZES.small,
          lineHeight: SIZES.large
        }}>
          {text}
          {!readMore && '...'}
          <Text
            onPress={() => {
              if(!readMore){
                setText(data.description);
                setReadMore(true);
              } else{
                setText(data.description.slice(0, 100))
                setReadMore(false)
              }
            }}
            style={{
              fontWeight: 'bold',
            }}
          >
            {readMore ? 'Show Less' : 'Read more'}
          </Text>
        </Text>
      </View>
    </>
  )
}

export default DetailsDesc