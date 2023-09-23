import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const about = () => {
  const [theProjectManager, setTheProjectManager] = useState(false);
  const [talYaron, settalYaron] = useState(false);
  const [staff, setStaff] = useState(false);
  const [itayAmosi, setItayAmosi] = useState(false);
  const [Nikita, setNikita] = useState(false);
  const [itaiGelberg, setItaiGelberg] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.listItem}>
        <View style={styles.checkboxContainer}>
          <Switch
            value={theProjectManager}
            onValueChange={(value) => setTheProjectManager(value)}
          />
          <Text>The project manager</Text>
        </View>

        {theProjectManager && (
          <View style={styles.subList}>
            <View style={styles.checkboxContainer}>
              <Switch
                value={talYaron}
                onValueChange={(value) => settalYaron(value)}
              />
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
                  }}
                />
                <Text>Tal Yaron</Text>
              </TouchableOpacity>
            </View>

            {talYaron && (
              <View style={styles.subList}>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  quisquam possimus quia rerum. Similique enim harum unde sed
                  eius, iusto corrupti nihil exercitationem saepe accusamus
                  atque neque voluptate voluptates sapiente.
                </Text>
              </View>
            )}
          </View>
        )}

        <View style={styles.checkboxContainer}>
          <Switch value={staff} onValueChange={(value) => setStaff(value)} />
          <Text>Oct 22 staff</Text>
        </View>

        {staff && (
          <View style={styles.subList}>
            <View style={styles.checkboxContainer}>
              <Switch
                value={itayAmosi}
                onValueChange={(value) => setItayAmosi(value)}
              />
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://us.123rf.com/450wm/deagreez/deagreez2104/deagreez210403136/167586649-portrait-photo-d-une-fille-souriante-heureuse-avec-une-coiffure-bob-pointant-vers-l-espace-vide-avec.jpg?ver=6",
                  }}
                />
                <Text>Itay Amosi</Text>
              </TouchableOpacity>
            </View>

            {itayAmosi && (
              <View style={styles.subList}>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  nulla asperiores ad minus sequi amet quaerat ut sit vitae enim
                  accusantium delectus, incidunt corporis magni libero facilis!
                  Consectetur, dolorem ea.
                </Text>
              </View>
            )}

            <View style={styles.checkboxContainer}>
              <Switch
                value={Nikita}
                onValueChange={(value) => setNikita(value)}
              />
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
                  }}
                />
                <Text>Nikita</Text>
              </TouchableOpacity>
            </View>

            {Nikita && (
              <View style={styles.subList}>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat velit alias sit earum porro modi eligendi neque
                  accusantium tenetur ex rerum architecto eum cumque, explicabo
                  officia nihil dicta nostrum amet.
                </Text>
              </View>
            )}
            <View style={styles.checkboxContainer}>
              <Switch
                value={itaiGelberg}
                onValueChange={(value) => setItaiGelberg(value)}
              />
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://us.123rf.com/450wm/deagreez/deagreez2107/deagreez210704757/171784644-portrait-d-une-jolie-fille-gaie-montrant-une-offre-d-espace-de-copie-comme-suivre-l-abonnement-isol%C3%A9.jpg?ver=6",
                  }}
                />
                <Text>Itai Gelberg</Text>
              </TouchableOpacity>
            </View>

            {itaiGelberg && (
              <View style={styles.subList}>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellat velit alias sit earum porro modi eligendi neque
                  accusantium tenetur ex rerum architecto eum cumque, explicabo
                  officia nihil dicta nostrum amet.
                </Text>
              </View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  },
  subList: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default about;
