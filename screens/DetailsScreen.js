import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>📄 Écran de détails</Text>
      {route.params && <Text>ID reçu : {route.params.id}</Text>}
    </View>
  );
}
