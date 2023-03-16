# Linked List

Linked list is a data structure which stores objects in nodes in a snake-like structure.

With a head and tail, you can only access one thing at a time.

Linked lists have the basic functions of insert, delete, search, etc which basically depend on 2 simple conditions:

- there is the need for iterating to find the node;
- The only way to iterate is going forward: `node.next`.

## Find a Loop

The two pointers move at different speed. If there is a loop, the list is also missing its tail. Then, there will be an iteration when the two pointers will be on the same node.

```java
while(runner.next!=null && runner.next.next!=null) {
walker = walker.next;
runner = runner.next.next;
if(walker==runner) return true;
}
```

## Merge Two Ordered Linked Lists

```cpp
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
```
Given `l1` and `l2` ordered linked lists, merge them in a single ordered linked list.

Return the head of the mreged linked list.

Solution: 

```cpp
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        
        if(!l1)
            return l2;
        if(!l2)
            return l1;
        
        ListNode* ans = NULL;
        
        if(l1->val > l2->val){
            ans = l2;
            l2 = l2->next;
        }
        else{
            ans = l1;
            l1 = l1->next;
        }
        
        ListNode* p = ans;
        
        while(l1 && l2){
            if(l1->val > l2->val){
                p->next = l2;
                l2 = l2->next;
            }
            else{
                p->next = l1;
                l1 = l1->next;
            }
            p = p->next;
        }
        
        if(l1)
           p->next = l1;
        else
            p->next = l2;
        
        return ans;
    }
```

## Merge k Sorted Linked Lists

Slow solution:

```cpp
ListNode* mergeKLists(vector<ListNode*>& lists) {
    ListNode* current = new ListNode(0);
    ListNode* head = current;
    int n = lists.size();
    int val, val_min, index;
    while(true) {
        val_min = VAL_MIN;
        for(int i=0; i<n;i++) {
            if(lists[i]) {
                val = lists[i]->val;
                if(val < val_min) {
                    val_min = val;
                    index = i;
                }
            }
        }
        if (val_min == VAL_MIN) break;
        else {
            current->next = lists[index];
            lists[index] = lists[index]->next;
            current = current->next;
        }
    }
    return head->next;
}
```

Other possible solutions:

- merge two lists each iteration until the comprehensive list is empty
- store all the node values in a list (or queue, advantages?), sort them, and build the merged ordered list