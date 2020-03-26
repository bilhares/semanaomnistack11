import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import logoImg from '../../../assets/logo.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

export default function Detail() {

    const navigation = useNavigation();
    const message = 'Ola xxx caso xxx valor xxx';
    const route = useRoute();


    const incident = route.params.incident;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject:'Heroi do caso : cadelinha atropelada',
            recipients:['felipe.bilhares@hotmail.com'],
            body:message,
        });
    }

    function sendWhatsapp(){
        Linking.openURL( `whatsapp://send?phone=5567991272638&text=${message}` )
    }

    return (
        <View style={styles.container} >

            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="e02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident} >
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>Ong bilhafuadsfh</Text>
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>cao atropelado caraio</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120.00</Text>


            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso!</Text>


                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}