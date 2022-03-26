import random
NoChangeWin = 0 #바꾸지않아서 이긴횟수
NoChangeLose = 0 #바꾸지않아서 진횟수
YesChangeWin = 0 #바꿔서 이긴횟수
YesChangeLose = 0 #바꿔서 진횟수
for i in range(100000): #10만번 반복
    reward = random.randrange(1,4) # 자동차의 1~3번칸 랜덤으로 설정
    answer = random.randrange(1,4) # 참가자가 1~3번칸중 랜덤으로 하나를 고름

    NoGoat = random.randrange(1,4) # 사회자는 참가자가 고른칸을 제외한 염소의 위치를 하나 택함
    while reward == NoGoat or answer == NoGoat:
        NoGoat = random.randrange(1,4)

    if reward == answer: #바꾸지 않았을때
        NoChangeWin += 1 #바꿔지 않아서 이긴횟수 1회추가
    else: #바꾸지 않아서 졌을때
        NoChangeLose += 1 #바꾸지 않아서 진횟수 1회추가
        
    change = random.randrange(1,4) #바꿨을 때
    while NoGoat == change or answer == change:#참가자가 바꾸기로 결정할때
        change = random.randrange(1,4)
        
    if reward == change: #바꿔서 이겼을때
        YesChangeWin +=1 #바꿔서 이긴횟수 1회추가
    else: #바꿔서졌을때
        YesChangeLose +=1#바꿔서 진횟수 1회추가
        
print("바꾸지않아서 이긴횟수",NoChangeWin)
print("바꾸지않아서 진횟수",NoChangeLose)
print("바꿔서 이긴횟수",YesChangeWin)
print("바꾸지않아서 진횟수",YesChangeLose)
NoChangeRate = (NoChangeWin*100)/(NoChangeWin+NoChangeLose)
print("바꾸지않아서 이길확률",NoChangeRate)
YesChangeRate = (YesChangeWin*100)/(YesChangeWin+YesChangeLose)
print("바꿔서 이긴 확률",YesChangeRate)