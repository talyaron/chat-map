import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

const teamMembers = [
  {
    name: "Yash Falke",
    position: "Graphic Designing Head",
    email: "yashfalke77@gmail.com",
    image:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Yash Falke",
    position: "Graphic Designing Head",
    email: "yashfalke77@gmail.com",
    image:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Yash Falke",
    position: "Graphic Designing Head",
    email: "yashfalke77@gmail.com",
    image:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Yash Falke",
    position: "Graphic Designing Head",
    email: "yashfalke77@gmail.com",
    image:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Harsh Sunwani",
    position: "Web Developing Head",
    email: "harshsunwani11@gmail.com",
    image:
      "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=",
  },
  {
    name: "Harsh Sunwani",
    position: "Web Developing Head",
    email: "harshsunwani11@gmail.com",
    image:
      "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=",
  },
  {
    name: "Harsh Sunwani",
    position: "Web Developing Head",
    email: "harshsunwani11@gmail.com",
    image:
      "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=",
  },
  {
    name: "Harsh Sunwani",
    position: "Web Developing Head",
    email: "harshsunwani11@gmail.com",
    image:
      "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=",
  },
  {
    name: "Nikhil Jaiswal",
    position: "Marketing and Publicity Head",
    email: "nikjaiswal21@gmail.com",
    image:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Nikhil Jaiswal",
    position: "Marketing and Publicity Head",
    email: "nikjaiswal21@gmail.com",
    image:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Nikhil Jaiswal",
    position: "Marketing and Publicity Head",
    email: "nikjaiswal21@gmail.com",
    image:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Nikhil Jaiswal",
    position: "Marketing and Publicity Head",
    email: "nikjaiswal21@gmail.com",
    image:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Nikhil Jaiswal",
    position: "Marketing and Publicity Head",
    email: "nikjaiswal21@gmail.com",
    image:
      "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function about() {
  return (
    <ScrollView>
      <View>
        <View>
          <Text>About us</Text>
        </View>
    <ImageBackground
          source={{
            uri: "https://previews.123rf.com/images/burakowski/burakowski1210/burakowski121000148/15600537-abstract-colorful-conversation-speech-bubbles.jpg",
          }}
        >
        <View>
          <View>
            <Text>
              PHOTOS <Text style={{ fontWeight: "bold" }}>FOR EVERYONE</Text>
            </Text>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Pico</Text> is an India-based
              website dedicated to sharing stock photography under the Pico
              license. Pico allows photographers to upload photos to its
              website, which are then curated by a team of photo editors. In
              Pico, we aspire to be one of the largest photography suppliers on
              the internet.
            </Text>
          </View>
        </View>

        {/* Team section */}
        <View>
          <Text>OUR TEAM</Text>
          <View>
            {/* Individual team members */}
            {teamMembers.map((member, index) => (
              <View key={index}>
                <Image
                  source={{ uri: member.image }}
                  style={{ width: 100, height: 100 }}
                />
                <View>
                  <Text>{member.name}</Text>
                  <Text>{member.position}</Text>
                  <Text>Email: {member.email}</Text>
                </View>
                <View>
                  <TouchableOpacity>
                    {/* <FontAwesomeIcon icon={["fab", "facebook-f"]} /> */}
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={{
                        uri: "https://raw.githubusercontent.com/pico-india/main-django/main/static/PICO-LOGO-SHORT.png",
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    {/* <FontAwesomeIcon icon={["fab", "instagram"]} /> */}
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
            </ImageBackground>
      </View>

    </ScrollView>
  );
}

export default about;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  company: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  companyInfo: {
    flexDirection: "column",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    margin: 16,
  },
  companyInfoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  our: {
    color: "#ffdc0e",
  },
  companyInfoParagraph: {
    fontSize: 16,
  },
  team: {
    justifyContent: "center",
  },
  teamHeader: {
    fontSize: 24,
    fontWeight: "bold",
    borderBottomWidth: 4,
    borderBottomColor: "#ffdc0e",
  },
  teamContainer: {
    minHeight: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
    maxWidth: 350,
    width: 350,
    margin: 20,
    borderRadius: 2,
    shadowColor: "#010101",
    shadowOpacity: 0.1,
    shadowRadius: 25,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  cardImage: {
    maxHeight: "50%",
    overflow: "hidden",
  },
  cardImageImage: {
    maxWidth: "100%",
    height: "auto",
  },
  cardTitle: {
    visibility: "hidden",
  },
  yellowSurname: {
    color: "#ffdc0e",
  },
  cardDescription: {
    visibility: "hidden",
  },
  cardMediaIcons: {
    visibility: "hidden",
  },
  cardInfo: {
    position: "relative",
    color: "#222",
    padding: 20,
  },
  cardInfoTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  cardInfoSubtitle: {
    fontSize: 16,
    fontWeight: "normal",
  },
  cardInfoLink: {
    textDecorationLine: "none",
    color: "navy",
  },
  cardInfoParagraph: {
    fontSize: 16,
    marginBottom: 15,
  },
  cardInfoMediaIcons: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cardMediaIcon: {
    color: "#999",
    fontSize: 28,
    marginHorizontal: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    overflow: "hidden",
    textDecorationLine: "none",
    transitionProperty: "color",
    transitionDuration: "0.3s",
    transitionTimingFunction: "ease",
  },
  cardMediaIconHover: {
    color: "#222",
  },
  cardMediaIconImage: {
    width: 40,
  },
  loading: {
    position: "relative",
    backgroundColor: "#e2e2e2",
    overflow: "hidden",
  },
  loadingBefore: {
    content: "",
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
    transform: "translateX: -100%",
    animationName: "loading",
    animationDuration: "1.5s",
    animationIterationCount: "infinite",
  },
  info: {
    fontSize: 18,
    fontWeight: "500",
  },
  footer: {
    backgroundColor: "#000",
    width: "100%",
  },
  footerContent: {
    maxWidth: 1250,
    marginHorizontal: "auto",
    paddingBottom: 40,
    paddingTop: 30,
    paddingHorizontal: 40,
  },
  footerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  logoDetails: {
    color: "#fdd166",
    fontSize: 30,
  },
  mediaIcons: {
    flexDirection: "row",
  },
  mediaIcon: {
    height: 40,
    width: 40,
    marginHorizontal: 8,
    borderRadius: 20,
    textAlign: "center",
    lineHeight: 40,
    color: "#fff",
    fontSize: 17,
    textDecorationLine: "none",
    transitionProperty: "all",
    transitionDuration: "0.4s",
    transitionTimingFunction: "ease",
  },
  mediaIconFacebook: {
    backgroundColor: "#4267b2",
  },
  mediaIconFacebookHover: {
    color: "#4267b2",
    backgroundColor: "#fff",
  },
  mediaIconInstagram: {
    backgroundColor: "#e1306c",
  },
  mediaIconInstagramHover: {
    color: "#e1306c",
    backgroundColor: "#fff",
  },
  linkBoxes: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkBox: {
    width: "19%",
  },
  linkName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 10,
    position: "relative",
  },
  linkNameBefore: {
    content: "",
    position: "absolute",
    left: 0,
    bottom: -2,
    height: 2,
    width: 35,
    background: "#fdd166",
  },
  linkBoxLi: {
    marginVertical: 6,
    listStyleType: "none",
  },
  linkBoxLink: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "400",
    textDecorationLine: "none",
    opacity: 0.8,
    transitionProperty: "all",
    transitionDuration: "0.4s",
    transitionTimingFunction: "ease",
  },
  linkBoxLinkHover: {
    opacity: 1,
    textDecorationLine: "underline",
  },
  inputBox: {
    marginRight: 55,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 2,
    borderColor: "#afafb6",
    backgroundColor: "#140b5c",
    borderRadius: 4,
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#fff",
    marginTop: 5,
  },
  inputPlaceholder: {
    color: "#afafb6",
    fontSize: 16,
  },
  inputButton: {
    backgroundColor: "#fff",
    color: "#140b5c",
    borderWidth: 0,
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 4,
    opacity: 0.8,
    cursor: "pointer",
    transitionProperty: "all",
    transitionDuration: "0.4s",
  },
  inputButtonHover: {
    opacity: 1,
  },
  bottomDetails: {
    width: "100%",
    backgroundColor: "#000",
    borderTopWidth: 0.5,
    borderTopColor: "#fff",
  },
  bottomText: {
    maxWidth: 1250,
    marginHorizontal: "auto",
    paddingVertical: 20,
    paddingHorizontal: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomTextSpan: {
    fontSize: 14,
    fontWeight: "300",
    color: "#fff",
    opacity: 0.8,
    textDecorationLine: "none",
  },
  bottomTextASpan: {
    marginHorizontal: 10,
  },
  bottomTextAHover: {
    opacity: 1,
    textDecorationLine: "underline",
  },
});
