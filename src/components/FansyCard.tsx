import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FansyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FansyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://avatars.dzeninfra.ru/get-zen_doc/3958762/pub_5f62f2ee1ccbe428a6c8e761_5f62f3236f388e770cc849e5/scale_1200',
          }}
          style={styles.imageCard}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Language</Text>
          <Text style={styles.cardLabel}>Lable</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 300,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#e7eef0',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginBottom: 8,
  },
  imageCard: {
    height: 160,
    width: '100%',
    textAlign: 'center',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    height: 300,
  },
  cardTitle: {
    color: '#223c44',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:10
  },
  cardLabel: {
    color: '#000000',
    marginTop:10
  },
  cardDescription: {
    color: '#495b5c',
    fontSize: 14,
    marginTop: 15,
  },
});
