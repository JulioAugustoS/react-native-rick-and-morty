import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Header, Card } from "../../components/common";
import request from "../../config/request";

const Characters = () => {
  const { goBack } = useNavigation();
  const [characters, setCharacters] = useState([]);

  const findCharacters = async () => {
    try {
      const { data } = await request.get("/character");

      setCharacters(data.results);
    } catch (err) {
      Alert.alert(
        "Algo deu errado!",
        "Não foi possivel carregar os personagens de Rick and Morty",
        [{ text: "Ok", onPress: () => goBack() }]
      );
    }
  };

  useEffect(() => {
    findCharacters();
  }, []);

  const renderCard = ({ item }: { item: any }) => (
    <Card
      uri={item.image}
      title={item.name}
      text1={item.species}
      text2={item.origin.name}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 16,
        }}
      />
    </View>
  );
};

export default Characters;
