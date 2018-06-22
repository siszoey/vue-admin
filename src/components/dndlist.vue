<template>
  <div class="dndList">
    <div class="dndList-list" :style="{width:width1}">
      <h3>{{list1Title}}</h3>
      <draggable :list="list1" class="dragArea" :options="{group:'article'}">
        <div class="list-complete-item" v-for="element in list1" :key='element.id'>
          <div class="list-complete-item-handle">[{{element.author}}] {{element.title}}</div>
          <div style="position:absolute;right:0px;">
            <span style="float: right ;margin-top: -20px;margin-right:5px;" @click="deleteEle(element)">
              <i style="color:#ff4949" class="el-icon-delete"></i>
            </span>
          </div>
        </div>
      </draggable>
    </div>
    <div class="dndList-list" :style="{width:width2}">
      <h3>{{list2Title}}</h3>
      <draggable :list="filterList2" class="dragArea" :options="{group:'article'}">
        <div class="list-complete-item" v-for="element in filterList2" :key='element.id'>
          <div class='list-complete-item-handle2' @click="pushEle(element)"> [{{element.author}}] {{element.title}}</div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'DndList',
  components: { draggable },
  computed: {
    filterList2() {
      return this.list2.filter(v => {
        if (this.isNotInList1(v)) {
          return v
        }
        return false
      })
    }
  },
  props: {
    list1: {
      type: Array,
      default() {
        return []
      }
    },
    list2: {
      type: Array,
      default() {
        return []
      }
    },
    list1Title: {
      type: String,
      default: 'list1'
    },
    list2Title: {
      type: String,
      default: 'list2'
    },
    width1: {
      type: String,
      default: '48%'
    },
    width2: {
      type: String,
      default: '48%'
    }
  },
  methods: {
    isNotInList1(v) {
      return this.list1.every(k => v.id !== k.id)
    },
    isNotInList2(v) {
      return this.list2.every(k => v.id !== k.id)
    },
    deleteEle(ele) {
      for (const item of this.list1) {
        if (item.id === ele.id) {
          const index = this.list1.indexOf(item)
          this.list1.splice(index, 1)
          break
        }
      }
      if (this.isNotInList2(ele)) {
        this.list2.unshift(ele)
      }
    },
    pushEle(ele) {
      this.list1.push(ele)
    }
  }
}
</script>

 