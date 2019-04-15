import styled from 'styled-components';

const ListItem = styled.li``;
const List = styled.ul`
    ${({ theme, ordered }) => `
        padding-left: ${theme.spacing.md()};
        list-style-type: ${ordered ? 'decimal' : 'disc'};
        & & {
          padding-left: ${theme.spacing.xl()};
          list-style-type: ${ordered ? 'lower-alpha' : 'circle'};
        } 
    `}
`;
List.Item = ListItem;
export default List;
