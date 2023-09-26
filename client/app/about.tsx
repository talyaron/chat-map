import {
  imageBackground,
  teamDevelopers,
} from "@/MockupDatabase/teamDevelopers";
import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";

const About = () => {
  const [expandedDevelopers, setExpandedDevelopers] = useState<string | null>(
    null
  );
  const toggleDeveloper = (developersId: string) => {
    if (expandedDevelopers === developersId) {
      setExpandedDevelopers(null);
    } else {
      setExpandedDevelopers(developersId);
    }
  };

  return (
    <View style={styles.box}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>About us:</Text>

          {teamDevelopers.map((developer) => (
            <View key={developer.id} style={styles.listItem}>
              <View style={styles.checkboxContainer}>
                <Switch
                  trackColor={{ false: "red", true: "green" }}
                  value={expandedDevelopers === developer.id}
                  onValueChange={() => toggleDeveloper(developer.id)}
                />
                <Image style={styles.image} source={{ uri: developer.image }} />
                <Text style={styles.text}>{developer.name}</Text>
              </View>

              {expandedDevelopers === developer.id && (
                <View style={styles.subList}>
                  <Text style={styles.role}>{developer.role}</Text>
                  <Text style={styles.text}>{developer.about}</Text>
                  <TouchableOpacity
                    key={developer.id}
                    onPress={() => Linking.openURL(developer.linkedin)}
                  >
                    <Text style={styles.linkedin}>
                      {developer.name}/linkedin
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          ))}
          <View>
            <Text style={{ color: "red" }}>about Team:</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              iusto aliquid error corporis natus! Magni odit accusamus molestiae
              minima quae labore quam blanditiis, similique recusandae, ratione
              officia hic. Nisi, minima.
            </Text>
            <Text style={{ color: "green" }}>
              GitHub: https://github.com/talyaron/chat-map
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  container: {
    padding: 50,
    fontSize: 16,
  },
  listItem: {
    flex: 1,
    textAlign: "center",
    padding: 10,
    position: "relative",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  subList: {
    transform: [{ scale: 1 }],
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    backgroundColor: "black",
  },
  linkedin: {
    backgroundColor: "white",
    width: "80%",
    color: "green",
  },
  role: {
    color: "red",
    backgroundColor: "black",
  },
  title:{
    fontSize: 50,
    color: "white"
  }
});

export default About;
