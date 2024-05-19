# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def mergeTwoLists(list1, list2):
    """
    :type list1: Optional[ListNode]
    :type list2: Optional[ListNode]
    :rtype: Optional[ListNode]
    """
    #solution
    #example - [1, 2 ,3], [4, 8, 10, 12, 22]
    newList = list()
    if(len(list1) <= len(list2)):
        list2Index = 0
        for list1Index in range(len(list1)):
            if(list1[list1Index] <= list2[list2Index]):
                newList.append(list1[list1Index])
            else:
                newList.append(list2[list2Index])
                list2Index += 1
    else:
        list1Index = 0
        for list2Index in range(len(list2)):
            if(list1[list1Index] <= list2[list2Index]):
                newList.append(list1[list1Index])
                list1Index += 1
            else:
                newList.append(list2[list2Index])
    return newList

print(mergeTwoLists([1,2,3], [4,5,6]))


