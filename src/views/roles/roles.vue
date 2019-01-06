<template>
  <div class="listMain">
    <bread-crumb
      level1="权限管理"
      level2="角色列表">
    </bread-crumb>
    <el-row class="md20">
      <el-col :span="24"><el-button type="">添加角色</el-button></el-col>
    </el-row>
    <el-table
      :data="tableData5"
      border
      stripe
      style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-row v-for="tag in props.row.children" :key="tag.authName" class="erow">
            <el-col :span="6">
              <el-tag
                closable
                type=""
                @close="handleClose(tag)">
                {{ tag.authName }}
              </el-tag>
              >
            </el-col>
            <el-col :span="18">
              <el-row  v-for="tag1 in tag.children" :key="tag1.authName">
                <el-col :span="8">
                  <el-tag
                    closable
                    type="success">
                    {{ tag1.authName }}
                  </el-tag>
                  >
                </el-col>
                <el-col :span="16">
                  <el-tag
                    v-for="item in tag1.children"
                    :key="item.id"
                    closable
                    type="info">
                    {{ item.authName }}
                  </el-tag>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column
        label="#"
        width="40"
        type="index">
      </el-table-column>
      <el-table-column
        label="角色名称"
        prop="roleName">
      </el-table-column>
      <el-table-column
        label="角色描述"
        prop="roleDesc">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            plain>
          </el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            plain>
          </el-button>
          <el-button
            type="success"
            icon="el-icon-check"
            size="mini"
            plain>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import BreadCrumb from '@/components/common/breadcrumb';

export default {
  name: 'roles',
  data() {
    return {
      tableData5: [
        {
          'id': 30,
          'roleName': '主管',
          'roleDesc': '技术负责人',
          'children': [
            {
              'id': 101,
              'authName': '商品管理',
              'path': null,
              'children': [
                {
                  'id': 104,
                  'authName': '商品列表',
                  'path': null,
                  'children': [
                    {
                      'id': 105,
                      'authName': '添加商品',
                      'path': null
                    },
                    {
                      'id': 106,
                      'authName': '添加商品22',
                      'path': null
                    }
                  ]
                },
                {
                  'id': 124,
                  'authName': '商品11',
                  'path': null,
                  'children': [
                    {
                      'id': 125,
                      'authName': '添加商品',
                      'path': null
                    },
                    {
                      'id': 126,
                      'authName': '添加商品22',
                      'path': null
                    }
                  ]
                }
              ]
            },
            {
              'id': 102,
              'authName': '权限管理',
              'path': null,
              'children': [
                {
                  'id': 108,
                  'authName': '商品列表',
                  'path': null,
                  'children': [
                    {
                      'id': 107,
                      'authName': '添加商品',
                      'path': null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          'id': 40,
          'roleName': '主管1',
          'roleDesc': '技术负责人',
          'children': [
            {
              'id': 103,
              'authName': '商品管理',
              'path': null,
              'children': [
                {
                  'id': 110,
                  'authName': '商品列表',
                  'path': null,
                  'children': [
                    {
                      'id': 111,
                      'authName': '添加商品',
                      'path': null
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleClose (tag) {
      console.log('111');
    }
  },
  components: {
    BreadCrumb
  }
};
</script>

<style scoped>
  .md20{margin:20px 0;}
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .erow{margin:10px 0;}
  .el-tag{margin:10px;}
</style>
