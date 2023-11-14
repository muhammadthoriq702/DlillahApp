import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import KeranjangCard from '../components/KeranjangCard'


function KeranjangScreen() {
    return (
      <ScrollView>
        {/* <Text>Keranjang!!</Text> */}
        <KeranjangCard/>
      </ScrollView>
    );
  }

export default KeranjangScreen