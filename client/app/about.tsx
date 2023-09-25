import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

interface User {
  id: string;
  name: string;
  image: string;
  about: string;
  linkedin: string;
}
interface ProjectManager {
  id: string;
  name: string;
  image: string;
  about: string;
  linkedin: string;
  
}

const managers: ProjectManager[] = [
  {
    name: "Tal yaron",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. quisquam possimus quia rerum Similique enim harum unde sed eius iusto corrupti nihil exercitationem saepe accusamus atque neque voluptate voluptates sapiente",
    id: "1",
    image:
      "https://trello-members.s3.amazonaws.com/4f97cdcfb3ef37c1662603aa/f8eebb0794e34f039a98f6d2de6b64a9/original.png",
      linkedin: 'linkedin: linkedin/sadasdasd',
  },
];

const users: User[] = [
  {
    name: "Itay Amosi",
    id: "2",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla asperiores ad minus sequi amet quaerat ut sit vitae enim accusantium delectus, incidunt corporis magni libero facilis Consectetur, dolorem ea.",
    image:
      "https://us.123rf.com/450wm/deagreez/deagreez2104/deagreez210403136/167586649-portrait-photo-d-une-fille-souriante-heureuse-avec-une-coiffure-bob-pointant-vers-l-espace-vide-avec.jpg?ver=6",
      linkedin: 'linkedin: linkedin/sadasdasd',
  },
  {
    name: "Nikita",
    id: "3",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Repellat velit alias sit earum porro modi eligendi nequeaccusantium tenetur ex rerum architecto eum cumque, explicaboofficia nihil dicta nostrum amet.",
    image:
      "https://trello-members.s3.amazonaws.com/6371094f58725900f3e6af44/933ac1c42df2c07ec3ad259ded59b970/original.png",
      linkedin: 'linkedin:  linkedin/sadasgdhfdjygfugh',
  },
  {
    name: "Itai Gelberg",
    id: "4",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat velit alias sit earum porro modi eligendi neque accusantium tenetur ex rerum architecto eum cumque, explicabo officia nihil dicta nostrum amet.",
    image:
      "https://www.picturecorrect.com/wp-content/uploads/2013/03/better-people-photos.jpg",
      linkedin: 'linkedin:  linkedin/dvbkgzydsKAHLDjOSDFL',
  },
  {
    name: "Shlomi azn",
    id: "5",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat velit alias sit earum porro modi eligendi neque accusantium tenetur ex rerum architecto eum cumque, explicabo officia nihil dicta nostrum amet.",
    image:
      "https://us.123rf.com/450wm/deagreez/deagreez2107/deagreez210704757/171784644-portrait-d-une-jolie-fille-gaie-montrant-une-offre-d-espace-de-copie-comme-suivre-l-abonnement-isol%C3%A9.jpg?ver=6",
      linkedin: 'linkedin:  linkedin/GFDYSUHliasfhskusasid',
  },
  {
    name: "Vladi",
    id: "6",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat velit alias sit earum porro modi eligendi neque accusantium tenetur ex rerum architecto eum cumque, explicabo officia nihil dicta nostrum amet.",
    image:
      "https://thumbs.dreamstime.com/b/close-up-happy-teenage-girl-1465128.jpg",
      linkedin: 'linkedin:  linkedin/sadasdasasdfagsdjhadvjsd',
  },
  {
    name: "Kseniya",
    id: "7",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat velit alias sit earum porro modi eligendi neque accusantium tenetur ex rerum architecto eum cumque, explicabo officia nihil dicta nostrum amet.",
    image:
      "https://www.shutterstock.com/shutterstock/photos/623101280/display_1500/stock-photo-portrait-of-serious-business-woman-standing-outside-building-623101280.jpg",
    linkedin: 'linkedin: linkedin/sadasdhayGHEOQDWJLNRLIWEEasd',
  },
  {
    name: "Tomer cohen",
    id: "8",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat velit alias sit earum porro modi eligendi neque accusantium tenetur ex rerum architecto eum cumque, explicabo officia nihil dicta nostrum amet.",
    image:
      "https://media.gettyimages.com/id/571751597/photo/portrait-of-young-business-woman-holding-paper-work-looking-away-side-view.jpg?s=612x612&w=gi&k=20&c=oMhPP2YzYQVx42_gCMGPm1R_xZE5yWLlqcSl7diBYIM=",
      linkedin: 'linkedin:  linkedin/sadasJASDGIWAHRFKUQWHLQoilasdaidasd',
  },
];

const imageBackground = {
  uri: "https://www.teahub.io/photos/full/1-16896_3d-world-map-hd-wallpaper-best-of-map.jpg",
};
const About = () => {
  const [expandedUser, setExpandedUser] = useState<string | null>(null);
  const [expandedManager, setExpandedManager] = useState<string | null>(null);

  const toggleUser = (userId: string) => {
    if (expandedUser === userId) {
      setExpandedUser(null);
    } else {
      setExpandedUser(userId);
    }
  };

  const toggleManager = (managerId: string) => {
    if (expandedManager === managerId) {
      setExpandedManager(null);
    } else {
      setExpandedManager(managerId);
    }
  };

  return (
    <View style={styles.box}>
      <ImageBackground source={imageBackground} style={styles.imageBackground}>
        <ScrollView style={styles.container}>
      <Text style={{fontSize:50,  color: "white"}}>About as:</Text>
          {managers.map((manager) => (
            <View key={manager.id} style={styles.listItem}>
              <View style={styles.checkboxContainer}>
                <Switch
                  value={expandedManager === manager.id}
                  onValueChange={() => toggleManager(manager.id)}
                />
                <Image style={styles.image} source={{ uri: manager.image }} />
                <Text style={styles.text}>{manager.name}</Text>
              </View>

              {expandedManager === manager.id && (
                <View style={styles.subList}>
                  <Text style={styles.text}>{manager.about}</Text>
                  <Text style={{ color: "green" }}>{manager.linkedin}</Text>
                </View>
              )}
            </View>
          ))}

          {users.map((user) => (
            <View key={user.id} style={styles.listItem}>
              <View style={styles.checkboxContainer}>
                <Switch
                  value={expandedUser === user.id}
                  onValueChange={() => toggleUser(user.id)}
                />
                <Image style={styles.image} source={{ uri: user.image }} />
                <Text style={styles.text}>{user.name}</Text>
              </View>

              {expandedUser === user.id && (
                <View style={styles.subList}>
                  <Text style={styles.text}>{user.about}</Text>
                  <Text style={{ color: "green" }}>{user.linkedin}</Text>
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
          <Text style={{ color: "green" }}>GitHub: https://github.com/talyaron/chat-map</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: 'column',
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
  },
  subList: {
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  image: {
    width: 50,
    height: 50,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text:{
    color: "white",
  },
});

export default About;
