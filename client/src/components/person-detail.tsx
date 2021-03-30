import React,{useContext} from 'react';
import styled from '@emotion/styled';
import {
  colors,
} from '../styles';
import {useParams } from '@reach/router';
import ContentSection from './content-section';
import { gql, useQuery } from '@apollo/client';
import QueryResult from './query-result';
// eslint-disable-next-line
import { RouteComponentProps } from "@reach/router";
import {PersonContext} from '../personContext';


/**
 * PersonDetail component renders the main content of a given person:
 * name, gender, birth year height, among other things.
 */


const PersonDetail = (_,RouteComponentProps) => {

  const {name} = useParams();
  const {handleHomeClick,handlePreviousClick} = useContext(PersonContext);

  const PERSON = gql`
    query Query($name: String) {
      searchByName(name: $name) {
        name
        gender
        birth_year
        height
        mass
        world {
          name
          climate
          diameter
          population
        },
        url
      }
}
  `;


  const { loading, error, data } = useQuery(PERSON,{
    variables:{
      name 
    },
  });

  
  
   
  const photo = 'https://images.unsplash.com/photo-1542648748-bbeaf3cec462?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1190&q=80';
  const thumbnail = 'https://images.unsplash.com/photo-1499334650700-42e4f7ffc63d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';
   
    return (
      <QueryResult error={error} loading={loading} data={data}>
        <ContentSection>
          <CoverImage src={thumbnail} alt="" />
          <PersonDetails>
            <DetailRow>
              <h1>{data?.searchByName[0]?.name}</h1>
            </DetailRow>
            <DetailRow>
              <DetailItem></DetailItem>
              <DetailItem>
                <PersonImage src={photo} />
                <PersonName>{data?.searchByName[0]?.name}</PersonName>
              </DetailItem>
              <DetailItem></DetailItem>
            </DetailRow>
            <DetailListContainer>
            <DetailItem>
                <h3>Personal Details</h3>
                <DetailRow>
                  <DetailItem></DetailItem>
                  <DetailItem>
                    <DetailEntry>
                      <h5>{`Full Name - ${data?.searchByName[0]?.name} `}</h5>
                    </DetailEntry>
                      <DetailEntry>
                        <h5>{`Date Of Birth - ${data?.searchByName[0]?.birth_year}`}</h5>
                      </DetailEntry>
                      <DetailEntry>
                        <h5>{`Height- ${data?.searchByName[0]?.height}`}</h5>
                      </DetailEntry>
                      <DetailEntry>
                      <h5>{`Mass - ${data?.searchByName[0]?.mass}`}</h5>
                      </DetailEntry>
                  </DetailItem>
                  <DetailItem></DetailItem>
                </DetailRow>
              </DetailItem>
              <DetailItem>
                <h3>Homeworld</h3>
                <DetailRow>
                  <DetailItem></DetailItem>
                  <DetailItem>
                      <DetailEntry>
                        <h5>{`Name - ${data?.searchByName[0]?.world.name}`}</h5>
                      </DetailEntry>
                      <DetailEntry>
                        <h5>{`Climate - ${data?.searchByName[0]?.world.climate}`}</h5>
                      </DetailEntry>
                      <DetailEntry>
                        <h5>{`Population - ${data?.searchByName[0]?.world.population}`}</h5>
                      </DetailEntry>
                      <DetailEntry>
                        <h5>{`Diameter - ${data?.searchByName[0]?.world.diameter}`}</h5>
                      </DetailEntry>
                  </DetailItem>
                  <DetailItem></DetailItem>
                </DetailRow>
                <DetailRow>
                  <DetailItem></DetailItem>
                  <DetailItem>
                      <ButtonContainer style={{flexDirection:"row"}}>
                        <button onClick={handlePreviousClick}>previous</button>
                        <button onClick={handleHomeClick}>Home</button>
                      </ButtonContainer>
                  </DetailItem>
                  <DetailItem></DetailItem>
                </DetailRow>
              </DetailItem>
            </DetailListContainer>
          </PersonDetails>
        </ContentSection>
      </QueryResult>
    );
  

};

export default PersonDetail;

const CoverImage = styled.img({
  objectFit: 'cover',
  maxHeight: 400,
  borderRadius: 4,
  marginBottom: 0,
  height: 400
});

const ButtonContainer = styled.span({
  flexDirection:"row",
  button:{
    marginRight:10,
    borderRadius:2,
  }
})

const PersonDetails = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  borderRadius: 4,
  marginBottom: 30,
  border: `solid 1px ${colors.silver.dark}`,
  backgroundColor: colors.silver.lighter,
  h1: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 5,
  },
  h4: {
    fontSize: '1.2em',
    marginBottom: 5,
    color: colors.text,
  },
});

const DetailRow = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingBottom: 20,
  marginBottom: 20,
  borderBottom: `solid 1px ${colors.silver.dark}`,
});

const DetailItem = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: colors.textSecondary,
  alignSelf: 'center',
});

const PersonImage = styled.img({
  height: 100,
  width: 100,
  marginBottom: 8,
  borderRadius: '50%',
  objectFit: 'cover',
});

const PersonName = styled.div({
  lineHeight: '1em',
  fontSize: '1em',
});

const DetailListContainer = styled.div({
  width: '100%',
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginTop: 5,
    li: {
      fontSize: '1em',
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 2,
    },
  },
});

const DetailEntry = styled.div({
  marginTop:30,
  color: colors.grey.light,
})
