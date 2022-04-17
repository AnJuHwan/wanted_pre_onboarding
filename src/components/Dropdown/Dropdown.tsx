import { faSearch, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { MutableRefObject, useRef, useState } from 'react';
import CenterContainer from '../CenterContainer/CenterContainer';
import styles from './Dropdown.module.css';

const Dropdown = () => {
  const dropdownItems: string[] = [
    'All Symbols',
    'BTCUSD.PERP',
    'ETHUSD.PERP',
    'BCHUSD.PERP',
    'LTCUSD.PERP',
    'XRPUSD.PERP',
  ];
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [dropdownList, setDropdownList] = useState<string[]>(dropdownItems);
  const [dropdownSelectItem, setDropdownSelectItem] = useState<string>(dropdownItems[0]);
  const selectRef = useRef<any>();

  const dropdownSelectItemHandler = (selectItem: string) => {
    setDropdownSelectItem(selectItem);
    setOpenDropdown(false);
  };

  const searchDropdownList = (searchItem: string) => {
    const searchItemList = dropdownItems.filter((item) =>
      item.toUpperCase().includes(searchItem.toUpperCase()),
    );
    setDropdownList(searchItemList);
  };

  return (
    <CenterContainer>
      <div className={styles.container}>
        <div className={styles.dropdownBox} onClick={() => setOpenDropdown(!openDropdown)}>
          <span>{dropdownSelectItem}</span>
          <FontAwesomeIcon icon={faSortDown} />
        </div>
        {openDropdown && (
          <div className={styles.selectItemContainer}>
            <div className={styles.searchContainer}>
              <FontAwesomeIcon icon={faSearch} className={styles.sesarchIcon} />
              <input
                type='text'
                placeholder='Search Symbol'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  searchDropdownList(e.currentTarget.value)
                }
              />
            </div>
            <div className={styles.selectItemBox} ref={selectRef}>
              {dropdownList.map((item, index) => (
                <div key={index} className={styles.listItemDiv}>
                  <span className={styles.listItem} onClick={() => dropdownSelectItemHandler(item)}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </CenterContainer>
  );
};

export default Dropdown;
