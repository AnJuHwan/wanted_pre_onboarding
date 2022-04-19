## 구현한 방법과 이유

---

1. Toggle
   > 방법 : 하나의 setState 값을 boolean으로 선언하여 상태에 따라 translate을 변경하여 애니메이션을 주었습니다.
   > <br /><br />
   > 이유 : Tab과도 같은 방식으로 string을 받아서 구현할 수 있었는데 Toggle버튼은 2가지값밖에 존재하지 않기때문에 boolean 값으로 구현하였습니다.
2. Tab

   > 방법 : selectItem값을 string으로 받아서 클릭한값을 setSelectItem으로 저장시키고 조건값에 따른 translate을 return (number tpye)을 반환 시키는 함수를 작성하여 구현하였습니다.
   > <br /> <br />
   > 이유 : Toggle과는 다르게 2가지의 boolean 값으로는 한계가 있다고 생각하여 , 그냥 탭바를 선택한 string 값을 받아 저장시켜 탭바의 string과 조건의 string이 같으면 그 조건의 맞는 translate을 움직여주는게 쉽다고 생각하여 이런 방식으로 구현하였습니다.

3. Slider
   > 방법 : input 의 min , max 를 각각 1,100으로 설정하여 onChange 함수를 통해 value값을 setRangePersent에 값을 저장하여 위의 persent 값을 표시하였고 , 밑에 특정값으로 이동할 수 있는 버튼? 들은 persentHandler을 통해 persent를 받아서 setRangePersent에 다시 저장시키도록 구현 하였습니다.
   > <br /><br />
   > 이유 : 코드를 보면 저는 persentData를 map으로 돌려서 밑에있는 값들을 표시하였는데 persentHandler라는 함수를 만들어서 onClick 함수로 map으로 돌린 data들을 persentHandler 라는 함수에 넣어줘서 값을 변경하는 방식이 쉽다고 생각하여 구현하였습니다.
4. Input
   > 방법 : 정규식을 통해서 email의 형식을 검사하여 true , false 일때를 감지해 state에 따라 icon색을 다르게 해주었으며 , 만약에 email input의 포커스가 아웃되었을 때 onblur 라는 이벤트를 통해서 email 형식의 따라 에러값을 표시하도록 하였습니다. 또한 password에서는 icon은 onClick에서 boolean으로 변경하면서 input type을 text 또는 password로 바꿔가면서 코드를 작성하였습니다.
   > <br /><br />
   > 이유 : 이메일 검사같은 경우는 정규식을 사용한 방법이 제일 쉬울거라고 생각했기 때문에 사용하였습니다.(구글검색 조금만하면 다 나와있기 때문에..)
5. Dropdown

   > 방법 : dropdown 방식도 tab와 마찬가지로 map을 돌려서 클릭한 아이템을 저장하여 표시하는 방법을 사용하였고 , dropdown창이 열리는 방법은 boolean으로 상태를 바꾸는 방법을 사용하였습니다. 또한 검색같은 경우는 searchDropdownList라는 함수를 이용해 검색되는 string값을 받아서 입력하는 문자와 , dropdown안에 있는 문자들을 다 대문자로 만든다음 filter을 이용하여 입력하는 문자가 포함되어 있는지 확인후 포함되어있는 문자들이 있는 배열을 다시 setDropdownList로 리스트를 변경해주는 방식을 사용하였습니다.
   > <br /><br />
   > 추가: dropdown 표시 후 dropdown이 아닌 다른곳을 클릭하게 되었을 때 dropdown 닫히게 구현해 놓았습니다. <br />
   > 방법 : useRef 를 통하여 dropdown 의 최상의 부모에게 ref를 전달하여 전달한 ref의 자식들인지 아닌지 체크한 후 아니라면 함수를 통하여 닫히도록 설정하였습니다.

   > <br /><br />
   > 이유 : 일단 문자들을 대문자로 바꾼 이유는 dropdown 리스트안에 대문자가 더 많다고 생각하여 왠만하면 소문자보다는 대문자로 변환하는게 더 조금이나마? 더 성능이 좋을거라고 생각이 되었고 , 'b' === 'B' 는 false가 나오기때문에 모든 문자를 대문자로 바꾸어서 비교를 하였습니다.

## 구현하면서 어려웠던 점과 해결과정과 방법:

---

구현하면서 어려웠던 점은 딱히 없었던거 같고.. 애니메이션 css를 잘 안썻기 때문에 css을 적용하는데 구글링해서 찾고 적용하는데 조금 시간을 많이 썻던거 같습니다.

```
<input type='range' />
```

slider을 구현하기 위해서 바의 색상등 커스텀하기 위해 css를 찾아보고 example에 있는 코드를 직접 복사붙여넣기 해서 하나씩 바꿔보면서 적용 해보면서 가장 쉬운 방식으로 적용해갔습니다.

배포된 사이트 : https://the-awesome-anjuhwan-site.netlify.app/
