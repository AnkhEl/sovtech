import React from 'react';
import styled from '@emotion/styled';
import { colors, mq } from '../styles';
import { Link } from '@reach/router';

/**
 * PersonCard  component renders basic info in a card format
 */

interface PersonCardProps{
 person:{
     name:string;
     gender:string;
     birth_year:string;
 }
}
const PersonCard = ({ person }:PersonCardProps) => {
    const {
        name, 
        gender,
        birth_year,
    } = person;

    const photo = 'https://images.unsplash.com/photo-1542648748-bbeaf3cec462?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80';
    const thumbnail = 'https://images.unsplash.com/photo-1579566346927-c68383817a25?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80';

    return (
        <CardContainer>
            <Link to={`/details/${name}`} style={{ textDecoration: "none" }}>
                <CardContent>
                    <CardImageContainer>
                        <CardImage src={thumbnail} alt={name} />
                    </CardImageContainer>
                    <CardBody>
                        <CardTitle>{name || ''}</CardTitle>
                        <CardFooter style={{ marginTop: "4rem" }}>
                            <AuthorImage src={photo} />
                            <AuthorAndTrack>
                                <AuthorName>{`Gender - ${gender}`}</AuthorName>
                                <TrackLength >
                                    {`DOB - ${birth_year}`}
                                </TrackLength>
                            </AuthorAndTrack>
                        </CardFooter>
                    </CardBody>
                </CardContent>
            </Link>
        </CardContainer>
    );
};

export default PersonCard;

/** Track Card styled components */
const CardContainer = styled.div({
    borderRadius: 6,
    color: colors.text,
    backgroundSize: 'cover',
    backgroundColor: 'white',
    boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [mq[0]]: {
        width: '90%',
    },
    [mq[1]]: {
        width: '47%',
    },
    [mq[2]]: {
        width: '31%',
    },
    height: 380,
    margin: 10,
    overflow: 'hidden',
    position: 'relative',
    ':hover': {
        backgroundColor: colors.pink.lightest,
    },
    cursor: 'pointer',
});

const CardContent = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
});

const CardTitle = styled.h3({
    textAlign: 'center',
    fontSize: '1.4em',
    lineHeight: '1em',
    fontWeight: 700,
    color: colors.text,
    flex: 1,
});

const CardImageContainer = styled.div({
    height: 220,
    position: 'relative',
    '::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(250,0,150,0.20)',
    },
});

const CardImage = styled.img({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    filter: 'grayscale(60%)',
});

const CardBody = styled.div({
    padding: 18,
    flex: 1,
    display: 'flex',
    color: colors.textSecondary,
    flexDirection: 'column',
    justifyContent: 'space-around',
});

const CardFooter = styled.div({
    display: 'flex',
    flexDirection: "row",
    marginTop: "4rem",
});

const AuthorImage = styled.img({
    height: 30,
    width: 30,
    marginRight: 8,
    borderRadius: '50%',
    objectFit: 'cover',
});

const AuthorAndTrack = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

const AuthorName = styled.div({
    lineHeight: '1em',
    fontSize: '1.1em',
});

const TrackLength = styled.div({
    fontSize: '0.8em',
});