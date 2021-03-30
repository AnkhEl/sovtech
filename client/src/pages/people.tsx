import React, { useContext } from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import PersonCard from '../containers/person-card';
import QueryResult from '../components/query-result'
import ReactPaginate from "react-paginate";
// eslint-disable-next-line
import { RouteComponentProps } from "@reach/router";
import {PersonContext} from '../personContext';


const PEOPLE = gql`
 query PeoplQuery($pageNum: Int) {
  searchByPage(pageNum: $pageNum) {
    name
    birth_year
    height
    mass
    gender
    world {
      name
      diameter
      population
      climate
    }
  }
}
`


//NB I am adding RouteComponentProps in order to to pass in the path prop from @reach/route
const People = (_,RouteComponentProps) => {
  //const [currentPage, setCurrentPage] = useState(0);
  const {currentPageNum, setCurrentPageNum} = useContext(PersonContext)

  const { loading, error, data, refetch } = useQuery(PEOPLE, {
    variables: {
      pageNum: currentPageNum
    }
  });

 
  const handlePageClick = ({ selected: selectedPage }) => {

    setCurrentPageNum(selectedPage);
    refetch({ 
      pageNum: currentPageNum 
    }); 
  }
  
  return (
  
      <Layout grid>
        <QueryResult error={error} loading={loading} data={data}>
          {data?.searchByPage?.map(person => (
            <PersonCard key={person.name} person={person} />
          ))}
        </QueryResult>
      
       <div style={{ flexBasis: "100%",height: 0, width:0}}> 

      <ReactPaginate
        initialPage={currentPageNum}
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={9}
        pageRangeDisplayed = {9}
        onPageChange={handlePageClick} 
        containerClassName={"pagination"}
        previousLnkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />

      </div>

      </Layout>
      

  );
};

export default People;
